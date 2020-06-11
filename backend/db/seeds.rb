1.times do |user|
  User.create!(
    email: "khanriza@gmail.com",
    password: "password",
  )
end

puts "Created 1 user"

10.times do |blog|
  Blog.create!(
    title: "Blog #{blog + 1}",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: 1
  )
end

puts "Created 10 blogs"
