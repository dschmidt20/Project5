class LineupSerializer < ActiveModel::Serializer
  attributes :catcher_id, :first_id, :second_id, :third_id, :short_id, :left_id, :center_id, :right_id, :id
  belongs_to :user
end
