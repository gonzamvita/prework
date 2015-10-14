#
# => Gonzalo Moreno Vita
# => Caesar's Cipher 1.0
#
# => Writing a function to solve a Caesar Cipher of with a left shift of 1

def solve_cipher(input, shift)

  auxArray = Array.new()
  solutionArray = Array.new()
  solution = String.new()

  input.each_char do |c|
    auxArray.push(c.ord)
  end

  auxArray.each {|x|

    if x == 32
      solutionArray.push(x)
    elsif shift < 0 && (x == 97 || x == 65)
      solutionArray.push(x + 24 + shift)
    elsif shift > 0 && (x == 90 || x == 122)
      solutionArray.push(x - 26 + shift)
    else
      solutionArray.push(x + shift)
    end
  }

  solutionArray.each{|x|
    solution += x.chr
  }

  puts solution
end

solve_cipher("pb uhdo qdph lv grqdog gxfn", -3)
# should return "my real name is donald duck"

# => Conclusión: este programa no funciona en todos los escenarios posibles.
# => Compruebo las aes y las zetas pero otras letras van a fallar dependiendo
# => del tamaño del shift.
