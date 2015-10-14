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

  def addItem(item)
    @items.push(item)
  end

  def calculateTotal
    @items.each do |x|
      @total_price += x.price
    end
  end

  def displayTotal
    puts "Your total today is #{@total_price} euros"
  end

  def checkout
    calculateTotal()
    displayTotal()
  end
end

class Item
  attr_accessor :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end

end

class Fruit < Item #no discount on weekdays, 10% off in weekends
  def price
    if Date.today.wday == 0 || Date.today.wday == 6
      @price -= @price * 10 / 100
    else
      @price
    end
  end
end

class Houseware < Item #5% off if the item costs more than 100 €/$
  def price
    if @price > 100
      @price -= @price * 5 / 100
    else
      @price
    end
  end
end

joshs_cart = ShoppingCart.new
banana = Fruit.new("Banana", 10)
vaccuum = Houseware.new("Vaccuum", 150)
oj = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
anchovies = Item.new("Anchovies", 2)

joshs_cart.addItem(oj)
joshs_cart.addItem(rice)
joshs_cart.addItem(banana)
joshs_cart.addItem(vaccuum)
joshs_cart.addItem(anchovies)

joshs_cart.checkout

# => Final thoughts: it seems to work correctly, but the price gets rounded so
# => maybe if we use other type for the price we can display the exact price.
