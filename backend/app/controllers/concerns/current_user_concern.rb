module CurrentUserConcern
    extend ActiveSupport::Concern

    included do
        before_action :set_current_user
    end

    # def set_current_user
    #     if session[:user_id]
    #         @current_user= User.find(session[:user_id])
    #     end
    # end
    def set_current_user
        if session[:user_id]
            @current_user= User.find(session[:user_id])
        else
            puts "user_id not found in session"
        end
    rescue ActiveRecord::RecordNotFound => e
        puts "User with id #{session[:user_id]} not found"
        @current_user = nil
    end
    

    
end