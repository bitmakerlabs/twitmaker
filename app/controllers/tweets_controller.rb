class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)


    respond_to do |format|
      if @tweet.save
        format.html do
          if request.xhr?
            render @tweet
          else
            redirect_to tweets_path
          end
        end
        format.json do
          render json: @tweet
          # except: ['created_at', 'updated_at']
        end
      else
        render :index
      end
    end

  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
