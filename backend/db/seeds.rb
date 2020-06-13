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

10.times do |portfolio|
  Portfolio.create!(
    title: "Portfolio #{portfolio + 1}",
    subtitle: "Portfolio subtitle #{portfolio + 1}",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    imagepreview: 'https://via.placeholder.com/150',
    imagemainone: 'https://via.placeholder.com/400',
    imagemaintwo: 'https://via.placeholder.com/400',
    imagemainthree: 'https://via.placeholder.com/400',
    user_id: 1
  )
end

puts "Created 10 Portfolios"
