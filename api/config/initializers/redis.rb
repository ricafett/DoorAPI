require 'em-hiredis'


EM.next_tick do
  $redis = EM::Hiredis.connect


  $redis.pubsub.subscribe('fingerprintAdded') do |data|
    data =  JSON.parse data
    user = User.find(data['user']['id'])
    if (!user.fingerprint1 || !user.fingerprint2)
      if (!user.fingerprint1)
        user.fingerprint1 = data['newPrintId']
      elsif (!user.fingerprint2)
        user.fingerprint2 = data['newPrintId']
      end
      user.save!
    else
      Rails.logger.debug 'User fingerprints are full'
    end
  end

  $redis.pubsub.subscribe('fingerprintDeleted') do |data|
    data =  JSON.parse data
    user = User.find(data['user']['id'])
    if (data['printN'] == 1)
      user.fingerprint1 = nil
      user.save!
    elsif (data['printN'] == 2)
      user.fingerprint2 = nil
      user.save!
    else
      Rails.logger.debug 'Error bad fingerprint number'
    end
  end



end
