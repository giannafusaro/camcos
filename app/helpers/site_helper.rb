module SiteHelper
  def is_open?
    #M-Th
    if Time.now.day > 1 and Time.now.day < 6
      unless Time.now.day == 5
        if Time.now.hour < 17 and Time.now.hour > 8
          return true
        end
      end
      if Time.now.hour < 15 and Time.now.hour > 8
        return true
      end
    end
    return false
  end
end
