class User < ApplicationRecord
    has_secure_password
    
    has_many :lineups
    validates :username, uniqueness: true
end
