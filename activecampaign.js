//Contatos
if(~jQuery('#contactLists > div.ac_page-title > h3').text().indexOf('All Contacts')) {
	jQuery('#contactLists > div.ac_page-title > h3').text('Todos os Contatos');
}

if(~jQuery('#contactLists > div.empty > div.title').text().indexOf("You don't have any contacts")) {
	jQuery('#contactLists > div.empty > div.title').text('Não tem nenhum contato');
}

if(~jQuery('#contactLists > div.empty > div.body').text().indexOf('Add or Import new contacts by clicking the "New Contact" button on the top right of the screen')) {
	jQuery('#contactLists > div.empty > div.body').text('Adicione ou Importe novos contatos ao clicar no botão "Novo Contato" na parte superior direita do seu ecrã');
}

if(~jQuery('#ember894 > div > button.ac_button.main.button_medium.alt2 > span.action-text').text().indexOf('Manage Scoring')) {
	jQuery('#ember894 > div > button.ac_button.main.button_medium.alt2 > span.action-text').text('Gerir Scoring');
}

jQuery('button .popover-trigger .action-popover-trigger .ac_button.noicon').click(function(event) {
	if(~jQuery('.ac_popover-menu').html().indexOf('Manage Tags')) {
		jQuery('.ac_popover-menu').html().replace('Manage Tags', 'Gerir Tags');
	}


	if(~jQuery('.ac_popover-menu').html().indexOf('Manage Exclusions')) {
		jQuery('.ac_popover-menu').html().replace('Manage Exclusions', 'Gerir Exclusões');
	}

	if(~jQuery('.ac_popover-menu').html().indexOf('Personal Batch Actions')) {
		jQuery('.ac_popover-menu').html().replace('Personal Batch Actions', 'Ações em lote');
	}
});

