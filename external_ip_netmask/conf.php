<?php
//If you do not want that, disable it here.
$enable_country_code = true;

//Whether to enable custom ca-bundle for the geoip https, request
//Some php + openssl installs dont find this by itself, so you can configure this here.
$enable_optional_ca_cert = true;
$ca_cert_path = "/etc/ssl/certs/ca-certificates.crt"; //Default ca bundle path on ubuntu