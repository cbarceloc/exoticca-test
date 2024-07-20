import { RenderOptions, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { StylesInjector } from 'src/app/providers/StylesInjector';

import { NotificationsContainer } from 'src/shared/lib/services/notifications-manager/NotificationsManager';
import { ReactQueryProvider } from 'src/shared/lib/services/react-query/ReactQuery';
import { debug } from 'vitest-preview';

interface IExtendedRenderOptions extends RenderOptions {
  //libs
  withQueryProvider?: boolean;

  // notifications
  withNotificationComponent?: boolean;
}
// libs wrappers
const wrapInQueryProvider = (componentTree: JSX.Element) => (
  <ReactQueryProvider>{componentTree}</ReactQueryProvider>
);

const setupComponent = (ui: JSX.Element, renderOptions?: IExtendedRenderOptions) => {
  if (!renderOptions) return ui;

  let componentTree = (
    <>
      <StylesInjector />
      {ui}
    </>
  );
  if (renderOptions.withQueryProvider) componentTree = wrapInQueryProvider(componentTree);
  componentTree;

  if (renderOptions.withNotificationComponent) {
    componentTree = (
      <>
        {componentTree} <NotificationsContainer />
      </>
    );
  }

  return componentTree;
};

const customRender = (ui: JSX.Element, renderOptions: IExtendedRenderOptions = {}) => {
  // initializeApp

  const componentTree = setupComponent(ui, {
    ...renderOptions,
    // libs
    withQueryProvider: true,

    // notifications
    withNotificationComponent: false,
    ...renderOptions,
  });
  render(componentTree);
};

export const user = userEvent.setup();
export * from '@testing-library/react';
export { customRender, debug, type IExtendedRenderOptions };
