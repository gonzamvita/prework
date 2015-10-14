#
# => Gonzalo Moreno Vita
# => Caesar's Cipher 2.0
#
# => Writing a function to solve a Caesar Cipher

def solve_cipher(input, shift = -3)

  auxArray = Array.new()
  solutionArray = Array.new()
  solution = String.new()

  alphabet = ('a'..'z').to_a # => Array del alfabeto para obtener la longitug.

  # => La idea aquí, después de probar con muchas opciones, es sacar el modulo
  # => del shift con la longitud del alfabeto. Así funcionaría con cualquier
  # => shift. Si queremos darle mil vueltas al alfabeto hacia atrás (-2600) y
  # => movernos 3 casillas (-2603), con el modulo obtendremos el numero de
  # => posiciones a mover despues de dar todas las vueltas necesarias.
  if shift < 0
    shift = shift % (alphabet.length * -1)
  else
    shift = shift % alphabet.length
  end

  input.each_char do |c|
    auxArray.push(c) # => introduzco los caracteres en un Array.
  end

  auxArray.each {|x| # => Loop para cada caracter del Array

    if x.match(/\p{Upper}/) # => Mayúsculas?
      if (x.ord + shift) < 65 # => Menor que la primera letra
        solutionArray.push(
            (91 - 65 % (x.ord + shift))
          )
      elsif (x.ord + shift) > 90 # => Mayor que la última letra
        solutionArray.push(
            (64 - 90 % -(x.ord + shift))
          )
      else
        solutionArray.push(x.ord + shift)
      end
    elsif x.match(/\p{Lower}/) # => Minúsculas?
      if (x.ord + shift) < 97
        solutionArray.push(
            (123 - 97 % (x.ord + shift))
          )
      elsif (x.ord + shift) > 122
        solutionArray.push(
            (96 - 122 % -(x.ord + shift))
          )
      else
        solutionArray.push(x.ord + shift)
      end
    else
      solutionArray.push(x.ord) # => No es una letra
    end

  }

  solutionArray.each{|x|
    solution += x.chr
  }

  puts solution
end

solve_cipher("PB UHDO QDPH LV GRQDOG GXFN", -5229)

# should return "MY REAL NAME IS DONALD DUCK"

# => Conclusión: este programa debería funcionar en todos los escenarios posibles.
# => Compruebo el rango en las mayúsculas y minúsculas y si se excede vuelvo
# => a la posición que corresponda dentro del rango independientemente de 'shift'.
