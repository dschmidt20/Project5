class User < ApplicationRecord
    has_secure_password
    
    has_many :lineups
    validates :username, presence: true, uniqueness: true, length: {minimum: 4}
    validates :password, length: { minimum: 6, maximum: 20 }, on: :create
end
