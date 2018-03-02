# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

category_1 = Category.create(title: "Emotional")
category_2 = Category.create(title: "Intellectual")
category_3 = Category.create(title: "Fitness")
category_4 = Category.create(title: "Social")
category_5 = Category.create(title: "Environmental")
category_6 = Category.create(title: "Financial")
category_7 = Category.create(title: "Spiritual")
category_8 = Category.create(title: "Health")
category_9 = Category.create(title: "Relationships/Family")

user1 = User.create(email: 'a@email.com', password: 'password')
user2 = User.create(email: 'b@email.com', password: 'password')
user3 = User.create(email: 'c@email.com', password: 'password')

habit1 = Habit.create(name: 'Run', description: 'Run 1 mile', number_of_days: 3, user_id: user1.id, category_id: category_3 )
habit2 = Habit.create(name: 'Floss', description: 'Floss teeth every day', number_of_days: 7, user_id: user2.id, category_id: category_8)
habit3 = Habit.create(name: 'Meditate', description: 'Meditate for 5 minutes', number_of_days: 5, user_id: user3.id, category_id: category_1)

star1 = Star.create(date: DateTime.new(2018,1,1,9), completed: true, habit_id: habit1.id)
star2 = Star.create(date: DateTime.new(2018,2,1,9), completed: false, habit_id: habit2.id)
star3 = Star.create(date: DateTime.new(2018,2,14,9), completed: true, habit_id: habit3.id)
