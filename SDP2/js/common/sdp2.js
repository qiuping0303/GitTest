//工具栏
$(function() {
	//左侧
	$("#toolbar-left").ligerToolBar({
		items: [
		    {
		    	click: function() {
		    		edit();
				},
				icon: 't-edit',
				title: '編集'
			},
			{ 
				click: function() {
				},
				icon: 't-delete',
				title: '削除'
			},
			{
				title: '拡大',
				click: function() {
				},
				icon: 't-enlarge'
			},
			{
				title: '縮小',
				click: function() {
				},
				icon: 't-narrow'
			},
			{
				title: '元状',
				click: function() {
				},
				icon: 't-orign'
			},
			{
				title: '選択',
				click: function() {
				},
				icon: 't-select'
			},
			{
				title: '最大化',
				click: function() {
				},
				icon: 't-max'
			},
			{
				title: '一番前',
				click: function() {
				},
				icon: 't-up'
			},
			{
				title: '一番後ろ',
				click: function() {
				},
				icon: 't-down'
			}
		]
	});
	//右侧一类
	$("#toolbar-right").ligerToolBar({
		items: [
			{
				text: 'インポート',
				click: function() {
				},
				icon: 't-import'
			},
			{
				text: '一時保存',
				click: function() {
				},
				icon: 't-tem-save'
			},
			{
				text: '保存',
				click: function() {
				},
				icon: 't-save'
			},
			{
				text: '反映',
				click: function() {
				},
				icon: 't-reflect'
			},
			{
				text: '出力',
				click: function() {
				},
				icon: 't-print'
			}
		]
	});	
	//右侧二类
	$("#toolbar-right2").ligerToolBar({
		items: [
			{
				text: '編集',
				click: function() {
					edit();
				},
				icon: 't-edit'
			},
			{
				text: 'レビュー',
				click: function() {
					edit();
				},
				icon: 't-review'
			},
			{
				text: 'インポート',
				click: function() {
				},
				icon: 't-import'
			},
			{
				text: '一時保存',
				click: function() {
				},
				icon: 't-tem-save'
			},
			{
				text: '保存',
				click: function() {
				},
				icon: 't-save'
			},
			{
				text: '反映',
				click: function() {
				},
				icon: 't-reflect'
			},
			{
				text: '出力',
				click: function() {
				},
				icon: 't-print'
			}
		]
	});	
	
});

