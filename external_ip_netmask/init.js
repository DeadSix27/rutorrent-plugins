plugin.loadMainCSS();
plugin.checkIP = function() {
if (plugin.enabled)
        plugin.addPaneToStatusbar("netmask-ip-td",
			$("<div>").attr("id","netmask-ip-holder")
                .append($("<div>")
				.attr("align","center")
				.attr("id","netmask-ip-cont")
				.html("<td class='sthdr'>NIP:&nbsp</td>" + "<td class='stval' id='netmask-ip-text'></td>")
			).get(0),3);
			if (this.netmask_ip_country_code != "FALSE")
			{
				$("#netmask-ip-text").html("<span class='netmask-ip-bright'>" + this.netmask_ip + "</span> " + " (<span class='netmask-ip-bold'>" + this.netmask_ip_country_code + "</span>)");
			}
			else {
				$("#netmask-ip-text").text(this.netmask_ip);
			}
			$("#netmask-ip-td").prop("title", 'EXT: '+this.netmask_ip+'\nLAN: '+this.netmask_lan_ip);
}

plugin.onRemove = function()
{
	plugin.removePaneFromStatusbar("netmask-ip-td");
}

plugin.checkIP();
