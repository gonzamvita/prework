#
# => Gonzalo Moreno Vita
# => Josh's Shake Shack
#
# => Create a Shake shop in Ruby
#
# An empty list where we can add milkshakes
# A method to add milkshakes to this list
# A method to checkout all of the milkshakes in our list
# Hint: Model this class in the same way we created the milkshake class,
# and call the price_of_milkshake method to return a milkshakes total price when checking out.


class MilkShake
  def initialize
    @ingredients = []
    @base_price = 3
  end

  def add_ingredients(ingredient)
    @ingredients.push(ingredient)
  end

  def TotalPrice
    @totalPrice = @base_price

    @ingredients.each do |ingredient|
      @totalPrice += ingredient.price
    end
    @totalPrice
  end
end


class Ingredient
  attr_reader :name, :price
  def initialize(name, price)
    @name = name
    @price = price
  end
end

class ShackShop
  def initialize
    @order = []
    @bill = 0
  end

  def addToOrder(milkshake)
    @order.push(milkshake)
  end

  def checkout
    @order.each do |milkshake|
      @bill += milkshake.TotalPrice()
    end
    puts "The total amount for the order is #{@bill}"
  end
end

# => Let's create some milkshakes, add the ingredients, add them to the order and print the total bill.
milkshake1 = MilkShake.new
milkshake2 = MilkShake.new
milkshake3 = MilkShake.new
milkshake4 = MilkShake.new

chocolate = Ingredient.new("Chocolate", 1)
banana = Ingredient.new("Banana", 2)
strawberry = Ingredient.new("Strawberry", 3)
joshs = Ingredient.new("Josh Special Ingredient", 5)

milkshake1.add_ingredients(chocolate) # 4
milkshake2.add_ingredients(banana) # 5
milkshake3.add_ingredients(chocolate)
milkshake3.add_ingredients(strawberry) # 7
milkshake4.add_ingredients(chocolate)
milkshake4.add_ingredients(joshs) # 9

myShackShop = ShackShop.new

myShackShop.addToOrder(milkshake1)
myShackShop.addToOrder(milkshake2)
myShackShop.addToOrder(milkshake3)
myShackShop.addToOrder(milkshake4)

myShackShop.checkout
# Should return 25

# => Conclusión: funcionamiento correcto.
