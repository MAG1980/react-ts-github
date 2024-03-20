import styles from './Search.module.scss';
import { FC, useRef, FormEvent, FormEventHandler } from "react";
import { ReactComponent as SearchIcon } from "@/assets/icon-search.svg"
import { Button } from "@/components/Button";

interface SearchProps {
  hasError?: boolean
  onSubmitHandler: (text: string) => void
}

export const Search: FC<SearchProps> = ({
                                          hasError,
                                          onSubmitHandler
                                        }) => {
  const searchRef = useRef<HTMLFormElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      ref={searchRef}
      autoComplete="off"
    >
      <div className={styles.search}>

        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          id="search"
          type="text" className={styles.textField}
          name="username"
          placeholder="Enter username"
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
