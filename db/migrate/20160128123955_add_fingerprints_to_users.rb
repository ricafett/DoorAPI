class AddFingerprintsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :fingerprint1, :integer
    add_column :users, :fingerprint2, :integer
  end
end
