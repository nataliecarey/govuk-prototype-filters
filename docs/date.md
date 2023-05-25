---
title: Date filters
order: 2
---

## duration

Returns a date a certain number of days from another date.

Input

```njk
{{ "2023-05-11" | xgovuk.duration(5, "days") }}
```

Output

```html
2023-05-16T00:00:00.000+01:00
```

Input

```njk
{{ "2023-05-11" | xgovuk.duration(5, "weeks") }}
```

Output

```html
2023-06-15T00:00:00.000+01:00
```

Input

```njk
{{ "2023-05-11" | xgovuk.duration(5, "months") }}
```

Output

```html
2023-10-11T00:00:00.000+01:00
```

Input

```njk
{{ "2023-05-11" | xgovuk.duration(5, "years") }}
```

Output

```html
2028-05-11T00:00:00.000+01:00
```

To return a date from today’s date, pass the special word `"today"` (or `"now"`):

Input

```njk
{{ "today" | xgovuk.duration(5, "days") }}
```

Output

```html
2023-05-11T09:00:59
```

If the second parameter is not passed, the unit will default to `"days"`.

Input

```njk
{{ "today" | xgovuk.duration(5) }}
```

Output

```html
2023-05-11T09:00:59
```

## govukDate

Convert an ISO 8601 date time to a human readable date that follows [the GOV.UK style](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#dates).

Input

```njk
{{ "2021-08-17" | xgovuk.govukDate }}
```

Output

```html
17 August 2021
```

You can also output a date with a truncated month:

Input

```njk
{{ "2021-08-17" | xgovuk.govukDate("truncate") }}
```

Output

```html
17 Aug 2021
```

To get the today’s date, pass the special word `"today"` (or `"now"`):

Input

```njk
This page was last updated on {{ "today" | xgovuk.govukDate }}.
```

Output

```html
This page was last updated on 22 October 2021.
```

## govukTime

Format an ISO 8601 date time or time to a human readable time that follows [the GOV.UK style](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#times).

Input

```njk
{{ "2021-08-17T00:00:31" | xgovuk.govukTime }}
{{ "2021-08-17T12:00:59" | xgovuk.govukTime }}
{{ "2021-08-17T18:30:00" | xgovuk.govukTime }}
```

Output

```html
midnight
midday
6:30pm
```

You can also pass in a time:

Input

```njk
{{ "08:15" | xgovuk.govukTime }}
```

Output

```html
8:15am
```

To get the current time, pass the special word `"now"` (or `"today"`):

Input

```njk
You submitted your application at {{ "now" | xgovuk.govukTime }}.
```

Output

```html
You submitted your application at 4:32pm.
```

## isoDateFromDateInput

The `govukDateInput` component stores separate values for `day`, `month` and `year` values.

When prefixed using a `namePrefix`, these values are stored with names prefixed with that value. This filter takes these prefixed values and converts them into an ISO 8601 formatted date.

Input

```js
const data = {
  `dob-day`: '01',
  `dob-month`: '02',
  `dob-year`: '2012',
}
```

```njk
{{ data | xgovuk.isoDateFromDateInput("dob") }}
```

Output

```html
2012-02-01
```

Combine this filter with `govukDate` to output a human readable date:

```njk
{{ data | xgovuk.isoDateFromDateInput("dob") | xgovuk.govukDate }}
```

```html
1 February 2012
```

It’s possible to configure `govukDateInput` so that only certain parts of a date are asked for, such as a month and year. You can also omit the `namePrefix` option and use individual `name` options for each value if you want to save them in a nested object. This filter also covers that use case:

```js
const data = {
  passport: {
    month: '5',
    year: '2001',
  }
}
```

```njk
{{ data.passport | xgovuk.isoDateFromDateInput }}
```

Output

```html
2001-05
```

## monthName

Convert a number (between 1 and 12) to the name of the corresponding month.

Input

```njk
{{ 3 | xgovuk.monthName }}
```

Output

```html
March
```

You can also output a truncated month name:

Input

```njk
{{ 3 | xgovuk.monthName("truncate") }}
```

Output

```html
Mar
```
