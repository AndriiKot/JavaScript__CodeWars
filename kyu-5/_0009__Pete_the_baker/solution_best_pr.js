const cakes = (needs, has) => Math.min(...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0)));
