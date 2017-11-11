plugin.loadMainCSS();
plugin.checkIP = function() {
if (plugin.enabled)
        plugin.addPaneToStatusbar("ip-td",
			$("<div>").attr("id","ip-holder")
                .append($("<div>")
				.attr("align","center")
				.attr("id","ip-cont")
				.html("<td class='sthdr'>IP:&nbsp</td>" + "<td class='stval' id='ip-text'></td>")
			).get(0),3);
			if (this.ip_country_code != "FALSE")
			{
				$("#ip-text").html("<span class='ip-bright'>" + this.ip + "</span> " + " (<span class='ip-bold'>" + this.ip_country_code + "</span>)");
			}
			else {
				$("#ip-text").text(this.ip);
			}
			$("#ip-td").prop("title", 'EXT: '+this.ip+'\nLAN: '+this.lan_ip);
}

plugin.onRemove = function()
{
	plugin.removePaneFromStatusbar("ip-td");
}

plugin.checkIP();
