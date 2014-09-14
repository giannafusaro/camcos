class CreatePopulationDensities < ActiveRecord::Migration
  def change
    create_table :population_densities do |t|
        t.integer :rank
        t.string :name
        t.integer :population_density
        t.integer :population
        t.integer :area
        t.integer :max
        t.integer :min
        t.text :neighbors
    end
    CSV.foreach("#{Rails.root}/db/seeds/PopulationDensity.csv", headers: true) do |row|
      pop_den = PopulationDensity.new
      pop_den.rank = row[0]
      pop_den.name = row[1]
      pop_den.population_density = row[2]
      pop_den.population = row[3]
      pop_den.area = row[4]
      pop_den.max = row[5]
      pop_den.min = row[6]
      pop_den.neighbors = [row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
      pop_den.save
    end
  end
end
