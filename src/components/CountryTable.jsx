import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { tableHeader } from './data';
import { useState } from 'react';

function CountryTable({
  countries,
  searchCountry,
  tableClass,
  imgClass,
  paperClass,
}) {
  const [valueToOrderBy, setValueToOrderBy] = useState('name');
  const [orderDirection, setOrderDirection] = useState('asc');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  function changePageHandler(e, newPage) {
    setPage(newPage);
  }

  function changeRowsPerPageHandler(e) {
    setRowsPerPage(parseInt(e.target.value), 10);
    setPage(0);
  }

  function changeDirectionHandler(name) {
    const isAsc = name === valueToOrderBy && orderDirection === 'asc';
    setValueToOrderBy(name);
    setOrderDirection(isAsc ? 'desc' : 'asc');
  }

  function sortFunctionHandler(a, b, valueToOrderBy, orderDirection) {
    switch (valueToOrderBy) {
      case 'Country Name':
        return orderDirection === 'asc'
          ? a.country < b.country
            ? -1
            : 1
          : a.country < b.country
          ? 1
          : -1;
      case 'Total Cases':
        return orderDirection === 'asc' ? a.cases - b.cases : b.cases - a.cases;
      case 'Today Cases':
        return orderDirection === 'asc'
          ? a.todayCases - b.todayCases
          : b.todayCases - a.todayCases;
      case 'Total Deaths':
        return orderDirection === 'asc'
          ? a.deaths - b.deaths
          : b.deaths - a.deaths;
      case 'Today Deaths':
        return orderDirection === 'asc'
          ? a.todayDeaths - b.todayDeaths
          : b.todayDeaths - a.todayDeaths;
      case 'Total Recovered':
        return orderDirection === 'asc'
          ? a.recovered - b.recovered
          : b.recovered - a.recovered;
      case 'Today Recovered':
        return orderDirection === 'asc'
          ? a.todayRecovered - b.todayRecovered
          : b.todayRecovered - a.todayRecovered;
      default:
        return 0;
    }
  }

  return (
    <Paper className={paperClass} variant="outlined">
      <Table
        stickyHeader
        aria-label="sticky table"
        className={tableClass}
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell />
            {tableHeader.map((item, index) => (
              <TableCell key={index}>
                <TableSortLabel
                  active={valueToOrderBy === item}
                  direction={valueToOrderBy === item ? orderDirection : 'asc'}
                  onClick={() => changeDirectionHandler(item)}
                >
                  {item}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {countries
            .filter((item) =>
              searchCountry ? item.country.includes(searchCountry) : item,
            )
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .sort((a, b) =>
              sortFunctionHandler(a, b, valueToOrderBy, orderDirection),
            )
            .map((country) => (
              <TableRow key={country.countryInfo.id}>
                <TableCell>
                  <img
                    src={country.countryInfo.flag}
                    alt="flagImg"
                    className={imgClass}
                  />
                </TableCell>
                <TableCell>{country.country}</TableCell>
                <TableCell>{country.cases}</TableCell>
                <TableCell>{country.todayCases}</TableCell>
                <TableCell>{country.deaths}</TableCell>
                <TableCell>{country.todayDeaths}</TableCell>
                <TableCell>{country.recovered}</TableCell>
                <TableCell>{country.todayRecovered}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {!searchCountry ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100, 222]}
          component="div"
          count={countries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={changePageHandler}
          onChangeRowsPerPage={changeRowsPerPageHandler}
        />
      ) : (
        ''
      )}
    </Paper>
  );
}

export default CountryTable;
