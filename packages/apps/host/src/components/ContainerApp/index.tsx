import React from 'react'

type ContainerAppProps = {
  AppOne: React.LazyExoticComponent<React.ComponentType<{}>>
  AppTwo: React.LazyExoticComponent<React.ComponentType<{}>>
}

export const ContainerApp = ({ AppOne, AppTwo }: ContainerAppProps) => {
  return (
    <div>
      <div>
        <h1>CONTAINER</h1>
        <div>
          <React.Suspense fallback={<>Carregando...</>}>
            <div>
              <h1>APP-1</h1>
              <AppOne />
              <a href="/app1">To App1</a>
            </div>
          </React.Suspense>
          <React.Suspense fallback={<>Carregando...</>}>
            <div>
              <h1>APP-2</h1>
              <AppTwo />
              <a href="/app2">To App2</a>
            </div>
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}
