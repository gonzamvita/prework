#writing a function to solve a Caesar Cipher of with a left shift of 1

def solve_cipher(input) 

	cipher = String.new(input)
	decrypted = String.new()

	cipher.each_char do |c|
		aux = c.ord
		
		decrypted += (aux-1).chr
	end

	puts decrypted

end

solve_cipher("ifmmp")
# should return "hello"