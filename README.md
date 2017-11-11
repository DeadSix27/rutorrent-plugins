
# ruTorrent Plugins
## Small collection of my personal ruTorrent plugins
---
#### Currently there are these plugins:

- #####external_ip  
- #####external_ip_netmask
  ![screenshot](dist/ext_ip_screenshot.png?raw=true "screenshot")  

	Show the external IP and Country code in the status bar
	Unlike the other plugins this one uses "dig" and no website for the IP.
	The country code is optional and uses https://freegeoip.net

  The netmask variant get's the external IP of a custom network namespace  
	(Network namespace as in `ip netns`)  
	Useful if you run your rtorrent behind a namespace'd VPN.  
	Make sure to read it's [README](external_ip_netmask/README.md) for instructions.

- #####nfo
  Just a mirror of https://github.com/AceP1983/ruTorrent-plugins/tree/master/nfo
