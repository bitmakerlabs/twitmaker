class TweetsController < ApplicationController
	def index
		@tweets = Tweet.all.order(created_at: :desc)
		@tweet = Tweet.new
	end

	def show
		@tweet = Tweet.find(params[:id])
	end

	def create
		@tweet = Tweet.new(tweet_params)

		if @tweet.save
			respond_to do |format|
				format.html {redirect_to tweets_path}
				format.json { render json: @tweet }
			end
		else
			render :index
		end
	end


	def destroy
	end


	private

	def tweet_params
		params.require(:tweet).permit(:message)
	end
end
