
# ruTorrent Plugins
## Small collection of my personal ruTorrent plugins
---
#### Currently there are these plugins:

- external_ip - Based on AceP1983's IP script, but modified to use dig and show the country code  
- external_ip_netmask - Same script with network-namespace support  

  ![screenshot](/dist/ext_ip_screenshot.png?raw=true "screenshot")  

	Show the external IP and Country code in the status bar  
	Unlike the other plugins this one uses "dig" and no website for the IP.  
	The country code is optional and uses https://freegeoip.net
	Make sure to read the [README](/external_ip/README.md) for instructions.

	The netmask variant get's the external IP of a custom network namespace  
	(Network namespace as in `ip netns`)  
	Useful if you run your rtorrent behind a namespace'd VPN.  
	Make sure to read the [README2](/external_ip_netmask/README.md) for instructions.

- nfo
  Just a mirror of https://github.com/AceP1983/ruTorrent-plugins/tree/master/nfo
