---
title: Array filters
order: 1
---

## formatList

Convert array to a list formatted as a sentence.

Input

```njk
{{ ["England", "Scotland", "Wales"] | xgovuk.formatList }}
```

Output

```html
England, Scotland and Wales
```

To format the list using a disjunction:

Input

```njk
{{ ["England", "Scotland", "Wales"] | xgovuk.formatList("disjunction") }}
```

Output

```html
England, Scotland or Wales
```

## isArray

Checks if a value is classified as an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) object.

Input

```njk
{{ ["england", "scotland", "wales"] | xgovuk.isArray }}
{{ "great britain" | xgovuk.isArray }}
```

Output

```html
true
false
```

## rejectFromArray

Reject items in an array that have a key with a given value.

Input

```njk
{{ [{
  name: "Sally Smith",
  role: "admin"
}, {
  name: "David Jones",
  role: "user"
}] | xgovuk.rejectFromArray("role", "admin") | dump }}
```

Output

```html
[{
  name: "David Jones",
  role: "user"
}]
```

## selectFromArray

Select items in an array that have a key with a given value.

Input

```njk
{{ [{
  name: "Sally Smith",
  role: "admin"
}, {
  name: "David Jones",
  role: "user"
}] | xgovuk.selectFromArray("role", "admin") | dump }}
```

Output

```html
[{
  name: "Sally Smith",
  role: "admin"
}]
```


## uniqueFromArray

Returns an array that contains only unique items.

Input

```njk
{{ ['Orange', 'Banana', 'Apple', 'Orange'] | xgovuk.uniqueFromArray }}
```

Output

```html
[Orange, Banana, Apple]
```
