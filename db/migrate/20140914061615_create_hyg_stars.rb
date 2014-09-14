class CreateHygStars < ActiveRecord::Migration
  def change
    create_table :hyg_stars do |t|
      t.integer :star_id, :limit => 8
      t.integer :hip, :limit => 8
      t.integer :hd, :limit => 8
      t.integer :hr, :limit => 8
      t.string :gliese
      t.string :bayer_flamsteed
      t.string :proper_name
      t.integer :ra, :limit => 8
      t.integer :dec, :limit => 8
      t.integer :distance, :limit => 8
      t.integer :pmra, :limit => 8
      t.integer :pmdec, :limit => 8
      t.integer :rv
      t.integer :mag, :limit => 8
      t.integer :abs_mag, :limit => 8
      t.string :spectrum
      t.integer :color_index, :limit => 8
      t.integer :x, :limit => 8
      t.integer :y, :limit => 8
      t.integer :z, :limit => 8
      t.integer :vx, :limit => 8
      t.integer :vy, :limit => 8
      t.integer :vz, :limit => 8
    end
    CSV.foreach("#{Rails.root}/db/seeds/HYGStarDatabase.csv", headers: true) do |row|
      hyg = HygStar.new
      hyg.star_id = row[0]
      hyg.hip = row[1]
      hyg.hd = row[2]
      hyg.hr = row[3]
      hyg.gliese = row[4]
      hyg.bayer_flamsteed = row[5]
      hyg.proper_name = row[6]
      hyg.ra = row[7]
      hyg.dec = row[8]
      hyg.distance = row[9]
      hyg.pmra = row[10]
      hyg.pmdec = row[11]
      hyg.rv = row[12]
      hyg.mag = row[13]
      hyg.abs_mag = row[14]
      hyg.spectrum = row[15]
      hyg.color_index = row[16]
      hyg.x = row[17]
      hyg.y = row[18]
      hyg.z = row[19]
      hyg.vx = row[20]
      hyg.vy = row[21]
      hyg.vz = row[22]
      hyg.save
    end
  end

end
