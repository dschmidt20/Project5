class LineupsController < ApplicationController
    require 'rest-client'
    
    require 'uri'
    require 'net/http'
    require 'openssl'
    
    
def create
   new_lineup = Lineup.create(lineup_params)
   render json: new_lineup, status: 201
end
def destroy
    Lineup.find(params[:id]).destroy
    head :no_content
end

def show
    render json: Lineup.find(params[:id])

end

def get_names
    url = URI("https://mlb-data.p.rapidapi.com/json/named.player_info.bam?sport_code='mlb'&player_id='#{params[:id]}'")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'mlb-data.p.rapidapi.com'
    request["x-rapidapi-key"] = '763701adb8mshd55236eab5b8b65p143ff2jsn82b9c746db80'
    
    response = http.request(request)
    render json: response.read_body
end

# def get_players
#     url = "http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='592789'"
#     response = RestClient.get(url)
#     render json: response
# end

def get_players
   render json: RestClient::Request.execute(method: :get, url: "https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?name_part='%25'&sport_code='mlb'",
   headers:{ x_rapidapi_host: "mlb-data.p.rapidapi.com",
    x_rapidapi_key: "763701adb8mshd55236eab5b8b65p143ff2jsn82b9c746db80"})
end

    private

    def lineup_params
        params.require(:lineup).permit(:catcher_id, :first_id, :second_id, :third_id, :short_id, :left_id, :center_id, :right_id, :user_id)
    end
end
