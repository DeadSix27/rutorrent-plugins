## This Plugin shows the External IP when you're using a network namespace + VPN for example.

#### This script has the same configuration options as the normal external_ip plugin.
#### See conf.php for options

---

##### This plugin requires a custom script and a sudoers line to function

###### Create this file:

File: `vpn_extip`
```bash
#!/bin/bash
sudo -v
sudo ip netns exec [MY_NAMESPACE] dig +short myip.opendns.com @resolver1.opendns.com
```
Replace `[MY_NAMESPACE]` with your namespace name

Save the above file to: `/usr/local/bin/vpn_extip`

Then run these commands on it:

```
$ sudo chown root:root /usr/local/bin/vpn_extip
$ sudo chmod 4755 /usr/local/bin/vpn_extip
```

Then add this to your sudoers file, to open it run:
```
$ sudo visudo
```

Add this line at the bottom:
```sudoers
www-data     ALL=(ALL)       NOPASSWD:/usr/local/bin/vpn_extip
```

Replace `www-data` with your php-user, it's `www-data` by default.


Aditionally you could add one for your user as well.
```
[YOUR_USERNAME]     ALL=(ALL)       NOPASSWD:/usr/local/bin/vpn_extip
