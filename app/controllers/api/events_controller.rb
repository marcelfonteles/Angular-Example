module Api
  class EventsController < ApplicationController
    respond_to :json
    
    
    def index
      respond_with Event.all
    end
    
    def create
      event = Event.new(event_params)
      if event.save
        respond_with :api, event, status: :ok, location: api_events_url
      else
        render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def show
      event = [Event.find(params[:id])]
      respond_with event
    end
    
    private
    
    def event_params
      params.require(:event).permit(:name, :event_date, :description, :place)
    end
    
  end
end
