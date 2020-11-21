develop:
	zola serve & yarn develop

build:
	yarn build:prod && zola build

install: 
	mv static/styles.css ../../static/styles.css

.PHONY: develop build install