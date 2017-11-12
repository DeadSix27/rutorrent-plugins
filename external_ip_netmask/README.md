## This Plugin shows the External IP when you're using a network namespace + VPN for example.

#### This script has the same configuration options as the normal external_ip plugin.
#### See conf.php for options

---

##### This plugin requires a custom script and a sudoers line to function.

Please edit the included "myip_ns" and replace `[MY_NAMESPACE]` with your namespace name.

Then copy it to: `/usr/local/bin/myip_ns`

Then run these commands on it:

```
$ sudo chown root:root /usr/local/bin/myip_ns
$ sudo chmod 4755 /usr/local/bin/myip_ns
```

Then add this to your sudoers file, to open it run:
```
$ sudo visudo
```

Add this line at the bottom:
```sudoers
www-data     ALL=(ALL)       NOPASSWD:/usr/local/bin/myip_ns
```

Replace `www-data` with your php-user, it's `www-data` by default.


Aditionally you could add one for your user as well.
```
[YOUR_USERNAME]     ALL=(ALL)       NOPASSWD:/usr/local/bin/myip_ns
