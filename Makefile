develop:
	zola serve & yarn watch

install: 
	yarn build:prod && zola build && cp static/styles.css ../../static/styles.css

.PHONY: develop install