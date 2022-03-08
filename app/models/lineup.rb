class Lineup < ApplicationRecord
    belongs_to :user
    validates :catcher_id, numericality: {greater_than: 1}
end
