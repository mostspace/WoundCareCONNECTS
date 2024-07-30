import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
//
import { NavItem } from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ item, offsetTop }) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path } = item;

  const active = useActiveLink(path, false);

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
  }, [pathname]);

  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
      />
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
};
