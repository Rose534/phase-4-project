class User < ApplicationRecord
    has_secure_password
    has_many :products
    has_many :password_resets, dependent: :destroy

    validates :username, { 
        length: { minimum: 3, maximum: 8 }, 
        uniqueness: true,
        presence: true 
    } 

    validates :email, {
        uniqueness: true,
        presence: true
    }
    # validates :password, {on: => :create}

    before_create {generate_token(:auth_token)}


    def generate_token(column)
       begin 
        self[column] = SecureRandom.urlsafe_base64
       end while User.exists?(column => self[column])
    end
     
end
