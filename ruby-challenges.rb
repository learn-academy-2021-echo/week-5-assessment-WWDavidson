# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# first I need to create a method that takes in an array
# it then needs to iterate over the array
# as it iterates over each word, it needs to filter/select the words that contain a specific letter
# it will then return the words containing said letter into a new array

def extract (array, letter)
    array.select {|value| value.include?(letter)}
end


p extract beverages_array,letter_o
p extract beverages_array, letter_t


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

#first I need to create a method that takes in an array
# I will then iterate over the array
# as I iterate, I will add the values inside the array together and return the sum


#I actually found out that .sum works on arrays so this made it super simple. 

def sum array
    array.sum
end

p sum nums_array1
p sum nums_array2



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


#first I need to create a class called Bike
# it will contain model, wheels, and current_speed
# I will hard code the bike having 2 wheels and a current speed of 0 in the intitializer
# I will then create a method that takes the info given and returns a sentence using string interpelation.
# For the pedal faster method, I made a simple math equation that adds 'new speed' to the current speed 
# then for the brake method I did a subtraction of 'new speed' from the current speed. To make sure it didn't result in a negative I put the subtraction equation in square brackets followed by ',0' then .max


class Bike 
    def initialize(model, wheels = 2, current_speed =0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

        def pedal_faster(new_speed)
            @current_speed = new_speed + @current_speed
        end

            def brake (new_speed)
                @current_speed = [@current_speed - new_speed,0].max
            end
end

trek = Bike.new('Trek')
trek.bike_info
 trek.pedal_faster(10)
trek.pedal_faster(18)
trek.brake(5)
trek.brake(25)
p trek.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
