class HomeController < ApplicationController
  def index
    @blogs = Blog.all
    render json: @blogs
  end
end
