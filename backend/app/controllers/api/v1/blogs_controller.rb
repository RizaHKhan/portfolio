module Api
  module V1
    class BlogsController < ApplicationController
      before_action :authorize_access_request!
      before_action :set_blog, only: [:show, :update, :destroy]

      def index
        @blogs = current_user.blogs.all

        render json: @blogs
      end

      def show
        render json: @blog
      end

      def create
        @blog = current_user.blogs.build(blog_params)

        if @blog.save
          render json: @blog, status: :created, location: @blog
        else
          render json: @blog.errors, status: :unprocessable_entity
        end
      end

      def update
        if @blog.update(blog_params)
          render json: @blog
        else
          render json: @blog.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @blog.destroy
      end

      private

      def set_blog
        @blog = current_user.blogs.find(params[:id])
      end

      def blog_params
        params.require(:blog).permit(:title, :body)
      end
    end
  end
end
