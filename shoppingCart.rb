#
# => Gonzalo Moreno Vita
# => Shopping Cart 1.0
#
# => Create a shopping cart in Ruby
#
# Bananas: 10€ / $10 each
# Orange Juice: 10€ / $10 each
# Rice: 1€ / $1 per unit
# Vacuum Cleaner: 150€ / $150
# Anchovies: 2€ / $2 each

require 'Date'
require 'pry'

class ShoppingCart
  def initialize
    @items = []
    @total_price = 0
  end

  def addItems(item)
    @items.push(item)
  end

  def calculateTotal
    @items.each do |x|
      @total_price += x.price
    end

    puts "Your total today is #{price} euros"
  end
end

class Item
  attr_accessor :name, :price, :discount
  def initialize(name, price)
    @name = name
    @total_price = price
    @discount = 0
  end
end

class Fruit < Item
  def price

  end
end

class Houseware < Item
  def price

  end
end

apple = Apple.new("Manzana")

puts(apple.name)
puts(apple.price)
