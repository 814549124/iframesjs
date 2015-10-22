message = message||(()->
	_callback = {}
	_on:(message,data)->
		_callback[message](data)
	on:(message,func)->
		_callback[message] = func
		null
	up:(message,data)->
		parent.message._on(message,data)
	down:(name,message,data)->
		frames[name].message._on(message,data)
)()