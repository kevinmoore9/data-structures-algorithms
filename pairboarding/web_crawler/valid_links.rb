require 'open-uri'
require 'nokogiri'
require 'httparty'

doc = Nokogiri::HTML(open("https://scottduane.github.io/TopSecretClue/"))
links = doc.css("a").map { |el| el.attributes["href"].value }

valid_links = []
links = ["https://scottduane.github.io/SecretClue7/", "https://scottduane.github.io/SecretClue4444/"]

h = {}

until links.empty?
  link = links.shift
  next if h[link] == true
  h[link] = true
  if HTTParty.get(link).response.code != "404"
    valid_links << link
    doc = Nokogiri::HTML(open(link))
    new_links = doc.css("a").map { |el| el.attributes["href"].value }
    links += new_links
  end
end

print valid_links
