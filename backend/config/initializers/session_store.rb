if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: "_portfolio_app", domain: "http://localhost:3002"
else
  Rails.application.config.session_store :cookie_store, key: "_portfolio_app"
end

