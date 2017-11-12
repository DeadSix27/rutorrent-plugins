<?php

eval( getPluginConf( $plugin["name"] ) );

$fileGetContext = false;

$ip = preg_replace( "/\r|\n/", "", shell_exec("myip"));

$local_IP = preg_replace( "/\r|\n/", "", shell_exec("hostname -I | cut -d' ' -f1"));

$country_code = "FALSE";

if ($enable_country_code)
{
	if ($enable_optional_ca_cert)
	{
		if (file_exists($ca_cert_path))
		{
			$fileGetContext = stream_context_create(
						Array(
							"ssl" => [
								"cafile" => "/etc/ssl/certs/ca-certificates.crt",
								"verify_peer"=> true,
								"verify_peer_name"=> true,
							]
						)
			);
		}
	}
		
	$ipdbJson = @file_get_contents("https://freegeoip.net/json/" . $ip, false, $fileGetContext);

	if ($ipdbJson != FALSE)
	{
		$ipdbArr = json_decode($ipdbJson);
		$country_code = $ipdbArr->country_code;
	}
}

$jResult .= "plugin.ip = ".escapeshellarg($ip)."; plugin.lan_ip = ".escapeshellarg($local_IP)."; plugin.ip_country_code = " . escapeshellarg($country_code) . ";";

$theSettings->registerPlugin($plugin["name"],$pInfo["perms"]);