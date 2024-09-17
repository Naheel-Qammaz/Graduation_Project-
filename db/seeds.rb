Dir[File.join(Rails.root, "db", "seeds", "*.rb")].sort.each do |seed|
  puts "seeding - #{seed}. loading seeds, for real!"
  load seed
end

# create users
User.find_or_create_by(email: 'admin@zenhr.com') do |user|
  user.password = '123456789'
  user.role = 'admin'
end

User.find_or_create_by(email: 'user_1@zenhr.com') do |user|
  user.password = '123456'
  user.role = 'member'
end

User.find_or_create_by(email: 'user_2@zenhr.com') do |user|
  user.password = '123123'
  user.role = 'member'
end

# -------------------------------------------------------------------

blog1= Blog.find_or_create_by(title: "blog title 1", body:"blog body 1", user_id: 1)
blog2= Blog.find_or_create_by(title: "blog title 2", body:"blog body 2", user_id: 2)
blog3= Blog.find_or_create_by(title: "blog title 3", body:"blog body 3", user_id: 3)

# -------------------------------------------------------------------
tag_1= Tag.find_or_create_by(name: "funny")
tag_2= Tag.find_or_create_by(name: "professional")

# ------------------------------
blog1.tags << tag_1
blog1.tags << tag_2
blog2.tags << tag_2