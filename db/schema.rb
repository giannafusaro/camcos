# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140914061615) do

  create_table "hyg_stars", force: true do |t|
    t.integer "star_id",         limit: 8
    t.integer "hip",             limit: 8
    t.integer "hd",              limit: 8
    t.integer "hr",              limit: 8
    t.string  "gliese"
    t.string  "bayer_flamsteed"
    t.string  "proper_name"
    t.integer "ra",              limit: 8
    t.integer "dec",             limit: 8
    t.integer "distance",        limit: 8
    t.integer "pmra",            limit: 8
    t.integer "pmdec",           limit: 8
    t.integer "rv"
    t.integer "mag",             limit: 8
    t.integer "abs_mag",         limit: 8
    t.string  "spectrum"
    t.integer "color_index",     limit: 8
    t.integer "x",               limit: 8
    t.integer "y",               limit: 8
    t.integer "z",               limit: 8
    t.integer "vx",              limit: 8
    t.integer "vy",              limit: 8
    t.integer "vz",              limit: 8
  end

end
