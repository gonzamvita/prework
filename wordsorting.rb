#
# => Gonzalo Moreno Vita
# => Word Sorting 1.0
#
# Write a function that receives a sentence and returns an array with the sentence's words sorted alphabetically.
# Ignore case and punctuation.
# "Have a nice day." => ["a", "day", "Have", "nice"]
# "Fools fall for foolish follies." => ["fall", "follies", "foolish", "Fools", "for"]
# "Ruby is a fun language!" => ["a", "fun", "is", "language", "Ruby"]

puts "write a sentence"

sentence = gets.chomp.to_s

sentence = sentence.delete ','
sentence2sort = sentence.delete '.'

puts sentence2sort

sortingArray = sentence2sort.split(" ")

puts "--------------"

puts sortingArray.sort

# => Conclusión: el programa funciona correctamente,
# => aunque habrá mejores maneras de hacer ciertas operaciones,
# => como eliminar los signos de puntuación.
